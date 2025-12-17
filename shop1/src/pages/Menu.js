import SubLayout from "../components/SubLayout";

const Menu = () => {
    return (
        <SubLayout
            title="메뉴 소개"
            desc="맛닭꼬의 여러가지 메뉴를 소개합니다"
            tabs={[
                { label: "New Menu", path: "/menu" },
                { label: "Bake Menu", path: "/menu/" },
                { label: "Roast Menu", path: "/menu/" },
                { label: "Fried Menu", path: "/menu/" },
                { label: "Side Menu", path: "/menu/" },
            ]}
            >
            {/* 실제 콘텐츠 */}
            <div>메뉴 리스트 영역</div>
        </SubLayout>
    );
};

export default Menu;