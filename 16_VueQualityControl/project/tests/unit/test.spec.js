import { penjumlahan, pengurangan, pembagian, perkalian, rataRata, sisaBagi, luasPersegi, luasLingkaran, luasKubus, volumeKubus} from "@/utils/index.js";

describe("Melakukan penjumlahan", () => {
    test("Penjumlahan bilangan positif", () => {
        expect(penjumlahan(2,1)).toBe(3);
    });

    test("Penjumlahan bilangan negatif", () => {
        expect(penjumlahan (-4,-4)).toBe(-8);
    });
    test("Penjumlahan bilangan non numerik", () => {
        expect(penjumlahan ("1","0")).toBe("10");
    });
});

describe("Melakukan pengurangan", () => {
    test("pengurangan bilangan positif", () => {
        expect(pengurangan(6,4)).toBe(2);
    });

    test("pengurangan bilangan negatif", () => {
        expect(pengurangan (-1,-3)).toBe(2);
    });
    test("pengurangan bilangan non numerik", () => {
        expect(pengurangan ("5","7")).toBe(-2);
    });
});

describe("Melakukan pembagian", () => {
    test("pembagian bilangan positif", () => {
        expect(pembagian(10,2)).toBe(5);
    });

    test("pembagian bilangan negatif", () => {
        expect(pembagian (-6,-3)).toBe(2);
    });
    test("pembagian bilangan non numerik", () => {
        expect(pembagian ("15","5")).toBe(3);
    });
});

describe("Melakukan perkalian", () => {
    test("perkalian bilangan positif", () => {
        expect(perkalian(1,1)).toBe(1);
    });

    test("perkalian bilangan negatif", () => {
        expect(perkalian (5,-3)).toBe(-15);
    });
    test("perkalian bilangan non numerik", () => {
        expect(perkalian ("1","5")).toBe(5);
    });
});

describe("Melakukan operasi Rata-rata", () => {
    test("Rata-rata bilangan positif", () => {
        expect(rataRata(5,2,3,4,3)).toBe(3.4);
    });

    test("Rata-rata bilangan negatif", () => {
        expect(rataRata(-4,-5,-1,-2,-4)).toBe(-3.2);
    });
    test("Rata-rata bilangan non numerik", () => {
        expect(rataRata("1","5","2","1","2")).toBe(3042.4);
    });
});

describe("Melakukan operasi Sisa Bagi", () => {
    test("Sisa bagi bilangan positif", () => {
        expect(sisaBagi(7,7)).toBe(0);
    });

    test("Sisa Bagi bilangan negatif", () => {
        expect(sisaBagi(-6,-1)).toBe(-0);
    });
    test("Sisa Bagi bilangan non numerik", () => {
        expect(sisaBagi("10","5")).toBe(0);
    });
});

describe("Melakukan operasi Luas persegi", () => {
    test("Luas persegi bilangan positif", () => {
        expect(luasPersegi(5,5)).toBe(25);
    });

    test("Luas persegi bilangan negatif", () => {
        expect(luasPersegi(-3,-3)).toBe(9);
    });
    test("Luas persegi bilangan non numerik", () => {
        expect(luasPersegi("10","5")).toBe(50);
    });
});

describe("Melakukan operasi Luas lingkaran", () => {
    test("Luas lingkaran bilangan positif", () => {
        expect(luasLingkaran(3.14,4)).toBe(50.24);
    });

    test("Luas lingkaran bilangan negatif", () => {
        expect(luasLingkaran(3.14,-4)).toBe(50.24);
    });
    test("Luas lingkaran bilangan non numerik", () => {
        expect(luasLingkaran("3.14","4")).toBe(50.24);
    });
});

describe("Melakukan operasi Luas kubus", () => {
    test("Luas kubus bilangan positif", () => {
        expect(luasKubus(8,8)).toBe(384);
    });

    test("Luas kubus bilangan negatif", () => {
        expect(luasKubus(-6,-6)).toBe(216);
    });
    test("Luas kubus bilangan non numerik", () => {
        expect(luasKubus("5","4")).toBe(120);
    });
});

describe("Melakukan operasi Volume Kubus", () => {
    test("Volume kubus bilangan positif", () => {
        expect(volumeKubus(9, 9, 9)).toBe(729);
    });

    test("Volume kubus bilangan negatif", () => {
        expect(volumeKubus(-5, -5, 5)).toBe(125);
    });
    test("Volume kubus bilangan non numerik", () => {
        expect(volumeKubus("3", "3", "3")).toBe(27);
    });
});