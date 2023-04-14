import React from 'react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const WorkStyle = styled.section`
    margin-top: 15vh;
    position: relative;

    #sidebar {
        width: 320px;
        position: fixed;

        .credits {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            list-style: none;
            padding: 0;
            li {
                margin-bottom: 10px;
            }
            span {
                display: block;
                text-transform: uppercase;
                font-size: 14px;
            }
        }
    }

    #slides {
        margin-left: 340px;
        ul {
            display: flex;
            flex-wrap: wrap;
            grid-template-columns: repeat(6, 1fr);
            grid-column-gap: 15px;
            grid-row-gap: 45px;
            list-style: none;
        }
    }
`;

export default function WorkPage({ data }) {
    return (
        <WorkStyle>
            <div id="sidebar" className="work-info">
                <h1>{data.strapiWork.title}</h1>
                {console.log(Object.entries(data.strapiWork.Credits).map)}

                <div className="content">
                    <p>{data.strapiWork.body.data.body}</p>
                </div>
                <ul className="credits">
                    {/* {Object.keys(data.strapiWork.Credits).forEach((key) => {
                        <li>
                            <span className="title">{key}</span>
                            {data.strapiWork.Credits[key]}
                        </li>;
                    })} */}
                    {/* <li>
                        <span className="title">{'{ Project }'}</span>
                        {data.strapiWork.Credits.project}
                    </li>
                    <li>
                        <span className="title">{'{ Client }'}</span>
                        {data.strapiWork.Credits.client}
                    </li>
                    <li>
                        <span className="title">{'{ Studio }'}</span>
                        {data.strapiWork.Credits.studio}
                    </li>
                    <li>
                        <span className="title">{'{ Creative Director }'}</span>
                        {data.strapiWork.Credits.cd}
                    </li>
                    <li>
                        <span className="title">{'{ My Role }'}</span>
                        {data.strapiWork.Credits.role}
                    </li> */}
                </ul>
            </div>
            {/* End of sidebar */}
            <div id="slides" className="work-images">
                <ul>
                    {data.strapiWork.images.map((image) => (
                        <li key={image.id}>
                            <GatsbyImage
                                image={getImage(image.localFile)}
                                alt={image.id}
                            />
                        </li>
                    ))}

                    {/* <li style={{ gridColumn: '1 / span 3' }}>
                        <GatsbyImage
                            image={getImage(
                                data.strapiWork.images[0].localFile
                            )}
                            alt={data.strapiWork.images.id}
                        />
                    </li>
                    <li style={{ gridColumn: '4 / span 2' }}>
                        <GatsbyImage
                            image={getImage(
                                data.strapiWork.images[1].localFile
                            )}
                            alt={data.strapiWork.images.id}
                        />
                    </li>
                    <li style={{ gridColumn: '1 / span 4' }}>
                        <GatsbyImage
                            image={getImage(
                                data.strapiWork.images[2].localFile
                            )}
                            alt={data.strapiWork.images.id}
                        />
                    </li>
                    <li style={{ gridColumn: '5 / span 2' }}>
                        <GatsbyImage
                            image={getImage(
                                data.strapiWork.images[3].localFile
                            )}
                            alt={data.strapiWork.images.id}
                        />
                    </li>
                    <li style={{ gridColumn: '1 / span 6' }}>
                        <GatsbyImage
                            image={getImage(
                                data.strapiWork.images[4].localFile
                            )}
                            alt={data.strapiWork.images.id}
                        />
                    </li> */}
                </ul>
            </div>
        </WorkStyle>
    );
}
// export const query = graphql`
//     query {
//         strapiWork {
//             title
//             slug
//             body {
//                 data {
//                     body
//                 }
//             }
//             Credits {
//                 project
//                 role
//                 studio
//                 client
//                 cd
//             }
//             images {
//                 localFile {
//                     childImageSharp {
//                         gatsbyImageData(
//                             placeholder: BLURRED
//                             formats: NO_CHANGE
//                         )
//                     }
//                 }
//                 id
//             }
//         }
//     }
// `;
