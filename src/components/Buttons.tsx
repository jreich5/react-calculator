import Button from "./Button.tsx";
import { IButtonProps } from "./interfaces.ts";

function Buttons({ buttonsData }: { buttonsData: IButtonProps[] }) {
  console.log(buttonsData);
  return (
    <section>
      {buttonsData.map((buttonData: IButtonProps) => {
        return <Button key={String(buttonData.name)} {...buttonData} />;
      })}
    </section>
  );
}

export default Buttons;