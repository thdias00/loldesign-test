import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Home } from "../../pages/Home";

describe("Home Page", () => {
	it("Should be able to simulate the binding", async () => {
		render(<Home />);
		
		const timeField = screen.getByPlaceholderText('Tempo em Minutos');
		const buttonElement = screen.getByText("Calcular");

		fireEvent.change(timeField, { target: { value: "20" }})
		fireEvent.click(buttonElement)

		await waitFor(() => {
			expect(timeField).toHaveValue("20");
		})
	})
})