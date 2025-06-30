import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
    {
        name: 'BANANA ICE SHORTS',
        id: 'tier-freelancer',
        href: '#',
        price: '200,000원',
        description: '상품 설명',
        features: ['1곡', '6~8컷 촬영본 (감독 ok컷)'],
        mostPopular: false,
    },
    {
        name: 'SHORTS PACK',
        id: 'tier-startup',
        href: '#',
        price: '500,000원',
        description: '상품 설명',
        features: [
            '3곡',
            '6~8컷 촬영본 (감독 ok컷)',
        ],
        mostPopular: false,
    },
    {
        name: 'ONE TAKE VIDEO',
        id: 'tier-enterprise',
        price: '100,000원',
        description: '상품 설명',
        features: [
            '1곡',
            '1~2컷 촬영본 (감독 ok컷)',
        ],
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Shorts() {
    return (
        <div className="bg-[#69d2e6]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/*<div className="mx-auto max-w-4xl text-center">*/}
                {/*    <h2 className="text-base/7 font-semibold text-[#FED722]">Pricing</h2>*/}
                {/*    <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="mt-16 flex justify-center">
                    <a href="https://open.kakao.com/o/sUWrHGag"
                       className="rounded-full bg-[#FEB81D] px-4 py-2 text-white font-semibold">Get Shorts</a>
                </div>
                <div
                    className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                'bg-[#FED722] rounded-3xl p-8 xl:p-10',
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id={tier.id} className="text-lg/8 font-semibold black">
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-[#FEB81D] px-2.5 py-1 text-xs/5 font-semibold text-white">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm/6 text-black">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-semibold tracking-tight text-black">{tier.price}</span>
                            </p>
                            {/*<a*/}
                            {/*    href={tier.href}*/}
                            {/*    aria-describedby={tier.id}*/}
                            {/*    className={classNames(*/}
                            {/*        tier.mostPopular*/}
                            {/*            ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'*/}
                            {/*            : 'bg-[#FEB81D] text-white shadow-sm hover:bg-[#FED722] focus-visible:outline-[#FEB81D]',*/}
                            {/*        'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',*/}
                            {/*    )}*/}
                            {/*>*/}
                            {/*    Buy plan*/}
                            {/*</a>*/}
                            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-black xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-black"/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center">
            <div className="mx-auto mt-6 max-w-2xl text-pretty text-start text-lg font-medium text-white sm:text-xl/8 inline-block">
                <ul className="space-y-3 text-white text-base/6 xl:mt-10">
                    <li className="flex gap-x-3 mb-2">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none"/>
                        SONY 시네마 라인 카메라 사용
                    </li>
                    <li className="flex gap-x-3 mb-2">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none"/>
                        세로 비율 편집 풀 영상 제공<br/>(구간 별 3개 숏폼 업로드용 제공)
                    </li>
                    <li className="flex gap-x-3 mb-2">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none"/>
                        업로드 자유
                    </li>
                    <li className="flex gap-x-3 mb-2">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none"/>
                        산간지역 촬영 시 별도 추가금 발생
                    </li>
                    <li className="flex gap-x-3 mb-2">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none"/>
                        VFX 불가
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}