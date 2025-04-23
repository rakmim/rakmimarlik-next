import { Client } from "@notionhq/client";
import { slugify } from './utils';

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export async function getDatabase(databaseId) {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results;
}

export async function getProjectsFromNotion() {
    const projectsDbId = process.env.NOTION_PROJECTS_DATABASE_ID;
    const rawProjects = await getDatabase(projectsDbId);
  
    const parsed = rawProjects.map((page) => ({
      number: page.properties["Project Number"]?.rich_text?.[0]?.plain_text || "",
      title: page.properties["Title"]?.title?.[0]?.plain_text || "",
      summary: page.properties["Summary"]?.rich_text?.[0]?.plain_text || "",
      description: page.properties["Description"]?.rich_text?.[0]?.plain_text || "",
      architect: page.properties["Architect"]?.rich_text?.[0]?.plain_text || "",
      concept: page.properties["Concept"]?.rich_text?.[0]?.plain_text || "",
      date: page.properties["Completion Date"]?.date?.start || "",
      location: page.properties["Location"]?.rich_text?.[0]?.plain_text || "",
      slug: slugify(page.properties["Title"]?.title?.[0]?.plain_text || ""),
    }));

    // ✅ Sort by number (as number, not string)
    parsed.sort((a, b) => parseInt(a.number) - parseInt(b.number));
    
    return parsed;
  }


  export async function getBlogsFromNotion() {
    const blogsDbId = process.env.NOTION_BLOG_DATABASE_ID;
    const rawBlogs = await getDatabase(blogsDbId);
  
    const parsed = rawBlogs.map((page) => ({
        number: page.properties["Number"]?.rich_text?.[0]?.plain_text || "",
        title: page.properties["Title"]?.title?.[0]?.plain_text || "",
        summary: page.properties["Summary"]?.rich_text?.[0]?.plain_text || "",
        // 🔥 Multi-select olarak parse ediyoruz:
    description: page.properties["Description"]?.multi_select?.map((item) => item.name) || [],
    tags: page.properties["Tags"]?.multi_select?.map((item) => item.name) || [],

        author: page.properties["Author"]?.rich_text?.[0]?.plain_text || "",
        date: page.properties["Publication Date"]?.date?.start || "",
        slug: slugify(page.properties["Title"]?.title?.[0]?.plain_text || ""),
      }));
    
      // ✅ Sort by number (as number, not string)
      parsed.sort((a, b) => parseInt(a.number) - parseInt(b.number));

      return parsed;
  }


  export async function getSliderProjectsFromNotion(limit = 3) {
    const projectsDbId = process.env.NOTION_PROJECTS_DATABASE_ID;
    const rawProjects = await getDatabase(projectsDbId);
  
    return rawProjects
      .slice(0, limit)
      .map((page) => ({
        title: page.properties["Concept"]?.rich_text?.[0]?.plain_text || "Proje",
        slug: slugify(page.properties["Title"]?.title?.[0]?.plain_text || ""),
        image: `/images/slider/${slugify(page.properties["Title"]?.title?.[0]?.plain_text || "")}.jpg`
      }));
  }
  