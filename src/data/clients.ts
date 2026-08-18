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

// Preserve the established on-page dimensions from the previous PNG assets.
// SVG intrinsic canvas sizes must not determine the visual size in the grid.
const legacyPngDisplaySizes: ReadonlyArray<readonly [number, number]> = [
  [168, 44], [166, 42], [154, 63], [109, 103], [81, 104], [85, 97], [167, 60], [101, 110],
  [152, 30], [134, 64], [96, 98], [144, 52], [137, 93], [137, 43], [165, 48], [140, 87],
  [139, 87], [115, 116], [88, 117], [97, 126], [134, 46], [159, 18], [144, 106], [157, 26],
  [157, 68], [125, 80], [92, 126], [120, 106], [114, 114], [136, 109], [157, 30], [153, 38],
  [130, 111], [111, 112], [115, 56], [134, 78], [103, 98], [99, 96], [129, 82], [137, 49],
  [90, 106], [137, 48], [150, 59], [147, 34], [91, 92], [146, 42], [141, 51], [133, 52],
  [134, 76], [130, 49], [147, 27], [137, 38], [97, 88], [160, 33], [83, 102], [99, 84],
  [102, 118], [89, 111], [119, 28], [103, 118], [122, 132],
];

const clientPageById: Partial<Record<number, { href: string; name: string }>> = {
  1: { href: "/brand-pages/johnson", name: "Johnson" },
  2: { href: "/brand-pages/angelalign", name: "Angelalign" },
  3: { href: "/brand-pages/pfizer", name: "Pfizer" },
  4: { href: "/brand-pages/3s", name: "3S" },
  5: { href: "/brand-pages/philips", name: "Philips" },
  6: { href: "/brand-pages/abbott", name: "Abbott" },
  8: { href: "/brand-pages/tencent-healthcare", name: "Tencent Healthcare" },
  9: { href: "/brand-pages/united-imaging", name: "United Imaging" },
  10: { href: "/brand-pages/gensci", name: "Gensci" },
  22: { href: "/brand-pages/linkedcare", name: "Linkedcare" },
  31: { href: "/brand-pages/mooeli", name: "Mooeli" },
  32: { href: "/brand-pages/lechipai", name: "Lechipai" },
  40: { href: "/brand-pages/hengqingsong", name: "Hengqingsong" },
};

export const CLIENT_LOGOS = Array.from({ length: 64 }, (_, index) => {
  const id = index + 1;
  const category = categoryById.get(id);
  const projectPage = clientPageById[id];

  if (!category) throw new Error(`Missing client category for logo ${id}`);

  return {
    id,
    src: `/images/clients/brand logo (${id}).svg`,
    category,
    displaySize: legacyPngDisplaySizes[index] ?? [166, 166],
    href: projectPage?.href,
    projectName: projectPage?.name,
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
