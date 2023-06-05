import { Container } from "../../GlobalStyles";
import { Input } from "../Input/Input";
import { FilterTitle } from "./FilterStyles";

export function Filter(props) {
  const { minValue, setMinValue, name, setName, maxValue, setMaxValue } = props;
  return (
    <Container width="300px" direction="column">
      <FilterTitle>Filtros</FilterTitle>

      <Input
        value={minValue}
        onChange={(event) => setMinValue(event.target.value)}
        label="Valor Mínimo"
      />
      <Input
        value={maxValue}
        onChange={(event) => setMaxValue(event.target.value)}
        label="Valor Máximo"
      />
      <Input
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Busca por nome"
      />
    </Container>
  );
}
