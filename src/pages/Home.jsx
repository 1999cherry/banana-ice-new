import { Suspense, useState, useEffect } from "react";
import Bananas from "../three/Bananas.jsx";
import { FadeIn, LeftMiddle } from "../three/layout/styles.jsx";
import Overlay from "../three/layout/Overlay.jsx";
import './home.css';
import LinkButton from "@/components/Banana2D/link-button";

export default function Home() {
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Suspense fallback={null}>
                <Bananas speed={speed} />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
                    <LinkButton buttonType="insta" />
                    <LinkButton buttonType="youtube" />
                    <LinkButton buttonType="3D" />
                </div>
                <FadeIn />
            </Suspense>
            <Overlay />
            {/*<LeftMiddle>*/}
            {/*    <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />*/}
            {/*</LeftMiddle>*/}
        </div>
    );
}