import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { App } from "./App";
import strings from "./assets/strings.json";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText(strings.RickAndMort)).toBeInTheDocument();
});
