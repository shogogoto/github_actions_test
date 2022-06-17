import React, { FC } from "react";

// submitボタンにはinputよりbutton要素タグを使うべし
//  https://hsmt-web.com/blog/submit-input-button/

type Props = {
  name?: string
}

const SubmitButton: FC<Props> = ({ name = "送信する" }) => {
  return (
    <button
      type="submit"
    >
    {name}
    </button>
  )

}

export default SubmitButton;
