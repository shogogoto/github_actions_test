import '@testing-library/jest-dom';
import {act, render, RenderResult, screen, fireEvent, waitFor } from "@testing-library/react";
import UserAPI from "~/api/UserAPI";
import RegisterUserForm, {FormInput} from "components/user/RegisterUserForm";
import InputUserId from "components/user/InputUserId";
// import withTestingForm from "tests/testing-helper";

// 要件
describe('ユーザーを登録する', () => {
  let submitButton: HTMLElement

  beforeEach(() => {
    render(<RegisterUserForm />);
    submitButton = screen.getByRole("submit");
  });

  // 仕様
  it('ID, Password, RePasswordは必須', async () => {
    await act( async() =>{
       fireEvent.submit(submitButton);
    });
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
  });

  it('パスワードと確認用パスワードが一致しない場合、Submitできない', async () => {
    const id = screen.getByLabelText("ID");
    const password = screen.getByLabelText("パスワード");
    const repassword = screen.getByLabelText("パスワード確認");
    await act( async() =>{
       fireEvent.change(id, { target: { value: "idididid"}});
       fireEvent.change(password, { target: { value: "1234567"}});
       fireEvent.change(password, { target: { value: "123456"}});
       fireEvent.submit(submitButton);
    });
    expect(await screen.findAllByRole("alert")).toHaveLength(1);
  });




});

