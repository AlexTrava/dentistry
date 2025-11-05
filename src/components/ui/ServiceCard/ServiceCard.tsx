import { Button } from "@/components";
import { cn } from "@/utils";

interface Props {
  srcImg: string;
  title: string;
  text: string;
  button?: boolean;
  buttonText?: string;
  classname?: string;
}

const ServiceCard = (props: Props) => {
  const { srcImg, title, text, button, buttonText } = props;
  return (
    <div
      className={cn(
        "max-w flex max-h-[310px] min-h-[228px] max-w-[630px] items-center justify-between gap-1.5 rounded-[6px] bg-linear-(--color-gradient) pl-10",
        !button && "flex items-center gap-[20px] pr-10",
      )}
    >
      <div className="flex flex-col gap-2.5">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{text}</p>
        {button && <Button className={"rounded"}>{buttonText}</Button>}
      </div>
      <div>
        <img src={srcImg} alt="/" className="max-w-[315px] object-contain" />
      </div>
    </div>
  );
};

export default ServiceCard;
