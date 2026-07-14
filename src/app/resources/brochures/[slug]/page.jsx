export default async function TemplatePage({ params }) {
  const { slug } = await params;

  const template = brouchures.find((item) => item.slug === slug);

  if (!template) {
    notFound();
  }
    return (
      
    )
}
