import path from 'path';

async function projectPageBuilder({ graphql, actions }) {
    const projectTemplate = path.resolve('./src/templates/Project.js');

    const { data } = await graphql(`
        query {
            allStrapiWork {
                nodes {
                    title
                    slug
                }
            }
        }
    `);

    const strapiWork = data.allStrapiWork.nodes;

    strapiWork.forEach((work, index) => {
        actions.createPage({
            path: `work/${work.slug}`,
            component: projectTemplate,
            context: {
                slug: work.slug,
                prev: index === 0 ? null : strapiWork[index - 1],
                next:
                    index === strapiWork.length - 1
                        ? null
                        : strapiWork[index + 1],
            },
        });
    });
}

export async function createPages(params) {
    await projectPageBuilder(params);
}
