import HomePage, { generateMetadata as homeGenerateMetadata } from "@/app/home/page";
import { Metadata } from "next";

type PageProps = {
    searchParams: Promise<{ locale?: string }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    return homeGenerateMetadata(props);
}

export default async function Page(props: PageProps) {
    return <HomePage {...props} />;
}
