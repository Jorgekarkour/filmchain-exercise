import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { REGISTER_SHAREHOLDER } from "../../gql/mutations/mutations";
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

function ShareholderForm() {
  const { data, error, loading } = useQuery(ALL_MOVIES);
  const movies =
    data?.allMovies?.map((movie) => ({
      value: movie.id,
      label: movie.title,
    })) || [];
  const [registerShareholder] = useMutation(REGISTER_SHAREHOLDER, {
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
      await registerShareholder({
        variables: {
          firstname: data.firstname,
          lastname: data.lastname,
          address: data.address,
          iban: data.iban,
          movieId: Number(data.movieId),
        },
      });
      toast.success("Shareholder added successfully");
      reset({
        firstname: "",
        lastname: "",
        address: "",
        iban: "",
        movieId: undefined,
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Container>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Shareholder registration</Title>
        <HalfBox>
          <StyledLabel>Firstname</StyledLabel>
          <StyledInput
            {...register("firstname", { required: true })}
            placeholder="Enter your firstname"
          />
          {errors.firstname && (
            <StyledErrorSpan>This field is required</StyledErrorSpan>
          )}
        </HalfBox>

        <HalfBox>
          <StyledLabel>Lastname</StyledLabel>
          <StyledInput
            {...register("lastname", { required: true })}
            placeholder="Enter your lastname"
          />
          {errors.lastname && (
            <StyledErrorSpan>This field is required</StyledErrorSpan>
          )}
        </HalfBox>

        <HalfBox>
          <StyledLabel>Address</StyledLabel>
          <StyledInput
            {...register("address", { required: true })}
            placeholder="Enter your address"
          />
          {errors.address && (
            <StyledErrorSpan>This field is required</StyledErrorSpan>
          )}
        </HalfBox>

        <HalfBox>
          <StyledLabel>IBAN</StyledLabel>
          <StyledInput
            {...register("iban", { required: true })}
            placeholder="Enter your iban"
          />
          {errors.iban && (
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
          Register
        </FormButton>
      </Wrapper>
    </Container>
  );
}

export default ShareholderForm;
