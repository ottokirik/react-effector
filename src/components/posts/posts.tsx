import { Box, Container, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useList } from "effector-react";
import { Link } from "react-router-dom";
import useAbortController from "../../hooks/use-abort-controller";
import { $posts, PostsGate } from "../../store/post.store";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#3f3f3f",
  fontWeight: "normal",
  transition: "color .3s",

  "&:hover": {
    color: "#000",
  },
});

const StyledHeading = styled(Heading)({
  transition: "all .3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const Posts = () => {
  useAbortController();

  return (
    <>
      <PostsGate />
      <Container w="100%" centerContent>
        <Box>
          {useList($posts, ({ title, id }) => (
            <StyledHeading size="lg" mb={4}>
              <StyledLink to={`/posts/${id}`}>{title}</StyledLink>
            </StyledHeading>
          ))}
        </Box>
      </Container>
    </>
  );
};
