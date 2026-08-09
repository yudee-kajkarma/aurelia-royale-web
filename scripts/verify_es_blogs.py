import os
import json

json_dir = "C:/Users/shinj/aurelia-royale-web/src/data/blogs/es"
blog_base_dir = "C:/Users/shinj/aurelia-royale-web/src/app/blog"

total_blogs = 0
passed_blogs = 0
failed_blogs = 0

for entry in sorted(os.listdir(blog_base_dir)):
    dir_path = os.path.join(blog_base_dir, entry)
    if os.path.isdir(dir_path):
        page_file = os.path.join(dir_path, "page.tsx")
        if os.path.exists(page_file):
            total_blogs += 1
            json_file = os.path.join(json_dir, f"{entry}.json")
            if not os.path.exists(json_file):
                print(f"[FAIL] Missing JSON file for blog: {entry}")
                failed_blogs += 1
                continue
            
            try:
                with open(json_file, "r", encoding="utf-8") as f:
                    data = json.load(f)

                if not data.get("title") or not data.get("description"):
                    print(f"[FAIL] Missing title or description in {entry}.json")
                    failed_blogs += 1
                else:
                    passed_blogs += 1
            except Exception as e:
                print(f"[FAIL] Invalid JSON format in {entry}.json: {e}")
                failed_blogs += 1

print("\n--- BLOG SPANISH TRANSLATION VERIFICATION REPORT ---")
print(f"Total Blogs Evaluated: {total_blogs}")
print(f"Passed & Valid:        {passed_blogs}")
print(f"Failed / Missing:      {failed_blogs}")

if failed_blogs == 0:
    print("\nSUCCESS: 100% of all blogs have valid Spanish JSON files!")
else:
    print(f"\nWARNING: {failed_blogs} blogs require JSON generation.")
