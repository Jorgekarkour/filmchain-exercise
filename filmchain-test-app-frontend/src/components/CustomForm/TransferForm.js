import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { REGISTER_TRANSFER } from "../../gql/mutations/mutations";
import {
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledErrorSpan,
  FormButton,
  HalfBox,
  FullBox,
} from "./Form.elements";

import {
  Container,
  Title,
  Wrapper,
} from "../GeneralElements/GeneralElements.elements";
import { ALL_MOVIES, ALL_SHAREHOLDERS } from "../../gql/querys/querys";

function TransferForm() {
  const { data, error, loading } = useQuery(ALL_MOVIES);
  const movies =
    data?.allMovies?.map((movie) => ({
      value: movie.id,
      label: movie.title,
    })) || [];
  const [registerTransfer] = useMutation(REGISTER_TRANSFER, {
    refetchQueries: [{ query: ALL_SHAREHOLDERS }],
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) => {
    try {
      await registerTransfer({
        variables: {
          amount: Number(data.amount),
          description: data.description,
          movieId: Number(data.movieId),
        },
      });
      toast.success("Transfer completed");
      reset({
        amount: "",
        description: "",
        movieId: undefined,
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Container>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Transfer</Title>
        <HalfBox>
          <StyledLabel>Amount (EUR)</StyledLabel>
          <StyledInput
            type={"number"}
            {...register("amount", { required: true })}
            placeholder="Enter the amount"
          />
          {errors.amount && (
            <StyledErrorSpan>This field is required</StyledErrorSpan>
          )}
        </HalfBox>

        <HalfBox>
          <StyledLabel>Description</StyledLabel>
          <StyledInput
            {...register("description", { required: true })}
            placeholder="Concept"
          />
          {errors.description && (
            <StyledErrorSpan>This field is required</StyledErrorSpan>
          )}
        </HalfBox>
        <FullBox>
          <StyledLabel>Movie</StyledLabel>
          <Controller
            name="movieId"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => {
              return (
                <StyledSelect
                  options={movies}
                  value={movies.find((movie) => movie.value === value)}
                  onChange={(selectedOption) => {
                    onChange(selectedOption.value);
                  }}
                />
              );
            }}
          />
          {errors.movieId && (
            <StyledErrorSpan>This field is required</StyledErrorSpan>
          )}
        </FullBox>
        <FormButton type="submit">
          <span></span>
          Accept
        </FormButton>
      </Wrapper>
    </Container>
  );
}

export default TransferForm;
