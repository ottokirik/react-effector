import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import { createComponent, useStore } from "effector-react";
import { useParams } from "react-router-dom";
import useAbortController from "../../hooks/use-abort-controller";
import { $post, getPostFx, PostGate } from "../../store/post.store";
import { Comments } from "../comments/comments";
import { Loader } from "../loader/loader";

const PostDetails = createComponent($post, (props, state) => {
  return (
    <Container centerContent>
      <Box maxW="sm">
        <Heading size="lg" textTransform="uppercase">
          {state.title}
        </Heading>
        <Divider orientation="vertical" />
        <Text>{state.body}</Text>
      </Box>
    </Container>
  );
});

export const Post = () => {
  const { id } = useParams<"id">();
  const isFetching = useStore(getPostFx.pending);

  useAbortController();

  if (isFetching) return <Loader />;

  return (
    <>
      <PostGate id={Number(id)} />
      <PostDetails />
      <Comments id={Number(id)} />
    </>
  );
};
