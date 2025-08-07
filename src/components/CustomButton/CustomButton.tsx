
interface Props {
	themeColor?: boolean;
	baseClassname?: string;
	children?: React.ReactNode;
}

function CustomButton(params: Props) {
	
	const {themeColor, baseClassname, children} = params;
	const isThemeColor = themeColor ? "border-[#00CBE1] text-white rounded-xl border-[1px] px-4 py-3" : "" 

	return (
		<button className={`${isThemeColor} ${baseClassname}`}>{children}</button>
	)
}

export default CustomButton;