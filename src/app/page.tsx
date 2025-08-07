import CustomButton from "@/components/CustomButton/CustomButton";

export default function Home() {
  return (
    <div className="">
      <div className="text-[60px] text-white font-semibold p-[100px] pt-[250px]">
        <h1>WHERE CREATIVITY</h1>
        <h1>MEETS DIMENSION</h1>
        <h3 className="text-3xl font-medium secondary-theme-text-color">From concept to render - Build your 3D vision with </h3>
        <h3 className="text-3xl font-medium secondary-theme-text-color">precision.</h3>
        
        <div className="flex pt-8">
          <CustomButton themeColor baseClassname="text-xl mr-4">EXPLORE SERVICES</CustomButton>
          <CustomButton themeColor baseClassname="text-xl mr-4">JOIN CLASS</CustomButton>
          <CustomButton themeColor baseClassname="text-xl mr-4">VIEW PORTFOLIO</CustomButton>
        </div>
      </div>
    </div>
  );
}
