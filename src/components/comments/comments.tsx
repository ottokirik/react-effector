import { Box, Container, Text } from "@chakra-ui/react";
import { createComponent, useList } from "effector-react";
import { $comments, CommentsGate } from "../../store/post.store";

const CommentsList = createComponent($comments, (_, state) => {
  return useList($comments, ({ body, email, name }) => (
    <Container w="100%" centerContent>
      <Box
        width="50%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Text color="#585858">{body}</Text>
        <Text fontSize="small">
          Author: {email}: {name}
        </Text>
      </Box>
    </Container>
  ));
});

export const Comments = ({ id }: { id: number }) => (
  <>
    <CommentsGate id={id} />
    <CommentsList />
  </>
);
