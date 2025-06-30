import Image from "next/image";
import Banana2D from '@/components/Banana2D';
import LinkButton from "@/components/Banana2D/link-button";
import BananaPackIcon from "@/components/Banana2D/banana-pack-icon";
import FlyoutMenu from "@/components/FlyoutMenu.jsx";

export default function Home() {
    return (
        <>
            <main className="w-full h-dvh flex items-center justify-center flex-col">
                <FlyoutMenu/>
                <Banana2D/>
                {/*<Image src={"/images/text.png"} width={300} height={100} alt={"text image"} className="mt-52"/>*/}
                <div className="absolute bottom-2 flex gap-6">
                    <LinkButton buttonType="insta"/>
                    <LinkButton buttonType="youtube"/>
                    <LinkButton buttonType="2D"/>
                </div>
                <BananaPackIcon/>
            </main>

        </>
    );
}
