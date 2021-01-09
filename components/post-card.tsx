import { device } from "../consts/theme";
import styled from "styled-components";
import { Posts_posts_nodes } from "../wpapi";
import Link from "next/link";
import ReadArticleSection from "perPageComponenta/Articles/readArticleSection";


const PostCard: React.FC<Posts_posts_nodes> = ({
  slug,
  featuredImage,
  title,
  excerpt,
}) => (
  <Link href={`article/${slug}`}>
    
    <Container>
    
      <Post>
      <GreySide>
        <ImageContainer>
        <Image
          src={
            featuredImage?.node?.mediaItemUrl ||
            "/article-image-placeholder.png"
          }
          alt={title + " - Featured image"}
        />
        </ImageContainer>
       </GreySide>
          
        <ContentContainer>
          <WritesContainer>
          <Title>{title}</Title>

          <Content dangerouslySetInnerHTML={{ __html: excerpt }} />
          </WritesContainer>
          <ReadArticleSection />
        </ContentContainer>
      </Post>
      
    </Container>
  </Link>
);

export default PostCard;

const Container = styled.article`
  width: 32%;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s linear;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.12);
  
  
  @media ${device.tablet} {
    width: 45%;
    
  }
  @media ${device.mobileL} {
    width: 100%;
    align-items: center;
    background-color:  blue;
  }
  
`;

const Image = styled.img`
  border-radius: 12px;
  width: 100%;
  max-width: 680px !important;
  img {
    display: block;
    margin: 0;
  }
`;
const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  margin-bottom: 0;
  
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  width: 100%;
  margin-top: 4.5rem;
  color: var(--secondary-color-normal);
  
  
`;
const WritesContainer = styled.div`
margin-left: 0.5rem;
`
const Content = styled.p`
  font-size: 110%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 0;
  
  
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  @media ${device.tablet} {
    align-items: center;
    
  }
  
`;
const GreySide = styled.div`
background-color: #DBDDDC;
`
const ImageContainer = styled.div`
margin-bottom: -7rem;
width: 70%;
height: 70%;
margin-left: 3rem;
`