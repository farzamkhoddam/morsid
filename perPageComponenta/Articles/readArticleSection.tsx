import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Posts_posts_nodes as Post } from "../../wpapi";

interface Props {
  post: Post;
}

const ReadArticleSection = ({ post }: Props) => {
  return (
    <ReadButtonContainer>
      <Link href={`article/${post.slug}`}>
        <a>Read More</a>
      </Link>
      <DateContainer>
        <CalenderContainer>
          <Image src="/calendar.svg" alt="Logo" width={150} height={60} />
        </CalenderContainer>
        <TarikhContainer>
          <h6>{post.date || "../../.."}</h6>
        </TarikhContainer>
      </DateContainer>
    </ReadButtonContainer>
  );
};

export default ReadArticleSection;

const ReadButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  margin-left: 1rem;
}
`;
const DateContainer = styled.div`
  display: flex;
`;
const CalenderContainer = styled.div`
  width: 3rem;
  height: 1rem;
  margin-top: 1.2rem;
`;
const TarikhContainer = styled.div`
  margin-right: 1rem;
`;
