export const CLIENT_CATEGORIES = ["all", "医疗", "快消", "宠物", "餐饮", "酒", "BAT", "其他"] as const;

export type ClientCategory = (typeof CLIENT_CATEGORIES)[number];
export type IndustryCategory = Exclude<ClientCategory, "all">;

const categoryMembers: Record<IndustryCategory, readonly number[]> = {
  医疗: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 31, 32, 40],
  快消: [13, 14, 15, 16, 20, 21, 23, 35, 41, 45, 47, 48, 49, 53, 54, 55, 56, 57, 60],
  宠物: [25, 38, 62, 63, 64],
  餐饮: [18, 24, 33],
  酒: [12, 29, 36],
  BAT: [28, 30, 34, 37, 42, 44, 52, 61],
  其他: [11, 17, 19, 26, 27, 39, 43, 46, 50, 51, 58, 59],
};

export const CATEGORY_ORDERS: Record<IndustryCategory, readonly number[]> = {
  医疗: [1, 2, 3, 5, 40, 6, 7, 22, 31, 32, 10, 4, 9, 8],
  快消: [13, 16, 14, 23, 15, 20, 45, 53, 48, 56, 21, 49, 55, 54, 60, 57, 47, 41, 35],
  宠物: [25, 38, 62, 63, 64],
  餐饮: [33, 18, 24],
  酒: [12, 29, 36],
  BAT: [42, 61, 30, 44, 28, 52, 34, 37],
  其他: [17, 11, 19, 43, 51, 46, 50, 59, 26, 27, 39, 58],
};

const categoryById = new Map<number, IndustryCategory>(
  Object.entries(categoryMembers).flatMap(([category, ids]) =>
    ids.map((id) => [id, category as IndustryCategory] as const),
  ),
);

export const CLIENT_LOGOS = Array.from({ length: 64 }, (_, index) => {
  const id = index + 1;
  const category = categoryById.get(id);

  if (!category) throw new Error(`Missing client category for logo ${id}`);

  return {
    id,
    src: `/images/clients/brand logo (${id}).svg`,
    category,
    href:
      id === 1
        ? "/brand-pages/johnson"
        : id === 2
          ? "/brand-pages/angelalign"
          : undefined,
  };
});

export const CLIENTS_BY_CATEGORY: Record<ClientCategory, typeof CLIENT_LOGOS> = {
  all: CLIENT_LOGOS,
  医疗: CATEGORY_ORDERS.医疗.map((id) => CLIENT_LOGOS[id - 1]),
  快消: CATEGORY_ORDERS.快消.map((id) => CLIENT_LOGOS[id - 1]),
  宠物: CATEGORY_ORDERS.宠物.map((id) => CLIENT_LOGOS[id - 1]),
  餐饮: CATEGORY_ORDERS.餐饮.map((id) => CLIENT_LOGOS[id - 1]),
  酒: CATEGORY_ORDERS.酒.map((id) => CLIENT_LOGOS[id - 1]),
  BAT: CATEGORY_ORDERS.BAT.map((id) => CLIENT_LOGOS[id - 1]),
  其他: CATEGORY_ORDERS.其他.map((id) => CLIENT_LOGOS[id - 1]),
};
