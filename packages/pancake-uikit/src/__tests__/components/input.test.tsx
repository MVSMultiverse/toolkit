import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Input from "../../components/Input/Input";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Input type="text" value="input" onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      background-color: #eeeaf4;
      border: 0;
      border-radius: 12px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      color: #3A5372;
      display: block;
      font-size: 16px;
      height: 40px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
      border: 1px solid #657D9C;
    }

    .c0::-webkit-input-placeholder {
      color: #657D9C;
    }

    .c0::-moz-placeholder {
      color: #657D9C;
    }

    .c0:-ms-input-placeholder {
      color: #657D9C;
    }

    .c0::placeholder {
      color: #657D9C;
    }

    .c0:disabled {
      background-color: #EFF1F3;
      box-shadow: none;
      color: #C4CED5;
      cursor: not-allowed;
    }

    .c0:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 1px #5DCCF8,0px 0px 0px 4px rgba(118,69,217,0.6);
    }

    <input
        class="c0"
        scale="md"
        type="text"
        value="input"
      />
    </DocumentFragment>
  `);
});
