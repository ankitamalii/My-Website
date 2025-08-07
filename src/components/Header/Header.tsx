import Link from "next/link";
import {headerData} from "@/utils/headerdata";

interface Props {
	menuopen?: boolean;
}

function Header(props: Props) {
	const { menuopen } = props;

	const renderHeaderData = (item: any, index: number) => {
		return (
			<Link key={index} href={item.link} className="text-white pl-12 font-bold">{item.name.toUpperCase()}</Link>
		)
	}

	return (
		<div className="flex justify-end theme-bg-color p-8">
			<div>{headerData.map(renderHeaderData)}</div>
		</div>
	)
}

export default Header;