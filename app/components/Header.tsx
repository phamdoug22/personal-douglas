import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h1 className="text-4xl font-bold text-white">douglas pham</h1>
      <SocialLinks />
    </div>
  );
};
