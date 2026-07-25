type JsonLdProps = {
    data: Record<string, unknown> | Array<Record<string, unknown>>;
};

// Renders a schema.org JSON-LD <script>. Safe: `data` is app-controlled and
// serialized with JSON.stringify (no user HTML injected).
export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
