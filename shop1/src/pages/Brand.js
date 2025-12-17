import SubLayout from "../components/SubLayout";

const Brand = () => {
    return (
        <SubLayout
            title="브랜드 이야기"
            desc="맛닭꼬의 브랜드에 대한 자세한 이야기를 들어보세요"
            tabs={[
                { label: "브랜드 소개", path: "/brand" },
                { label: "신선푸드", path: "/brand/" },
                { label: "신선의 하루", path: "/brand/" },
                { label: "물류의 하루", path: "/brand/" },
                { label: "현미베이크이야기", path: "/brand/" },                
            ]}
            >
            {/* 실제 콘텐츠 */}
            <img
                src={process.env.PUBLIC_URL + "/img/img_brand_content.png"}
                alt="회사소개"
                style={{ width: "100%", display: "block" }}
            />
        </SubLayout>
    );
};

export default Brand;