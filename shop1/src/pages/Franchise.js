import SubLayout from "../components/SubLayout";

const Franchise = () => {
    return (
        <SubLayout
            title="창업 안내"
            desc="맛닭꼬의 브랜드 경쟁력을 소개합니다"
            tabs={[
                { label: "맛닭꼬 경쟁력", path: "/franchise/" },
                { label: "창업절차", path: "/franchise" },
                { label: "창업비용", path: "/franchise/" },
                { label: "인테리어", path: "/franchise/" },
                { label: "창업상담", path: "/franchise/" },
            ]}
            >
            {/* 실제 콘텐츠 */}
            <img
                src={process.env.PUBLIC_URL + "/img/img_franchise_content.png"}
                alt="회사소개"
                style={{ width: "100%", display: "block" }}
            />
        </SubLayout>
    );
};

export default Franchise;