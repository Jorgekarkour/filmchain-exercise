import React from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { REGISTER_MOVIE } from "../../gql/mutations/mutations";
import {
  StyledInput,
  StyledLabel,
  StyledErrorSpan,
  FullBox,
  FormButton,
} from "./Form.elements";
import {
  Container,
  Title,
  Wrapper,
} from "../GeneralElements/GeneralElements.elements";
import { ALL_MOVIES } from "../../gql/querys/querys";

function MovieForm() {
  const [registerMovie] = useMutation(REGISTER_MOVIE, {
    refetchQueries: [{ query: ALL_MOVIES }],
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) => {
    try {
      await registerMovie({ variables: { title: data.title } });
      toast.success("Movie added successfully");
      reset({ title: "" });
    } catch (e) {
      e.graphQLErrors?.[0]?.extensions?.exception.code === "P2002"
        ? toast.error("Movie title already exist")
        : toast.error("Something went wrong");
    }
  };
  return (
    <Container>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Movie registration</Title>
        <FullBox>
          <StyledLabel>Title</StyledLabel>
          <StyledInput
            {...register("title", { required: true })}
            placeholder="Enter the movie title"
          />
          {errors.title && (
            <StyledErrorSpan>This field is required</StyledErrorSpan>
          )}
        </FullBox>
        <FormButton type="submit">
          <span></span>
          Register
        </FormButton>
      </Wrapper>
    </Container>
  );
}

export default MovieForm;
