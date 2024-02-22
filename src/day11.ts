interface ProductInterface {
  nama: string;
  berat: number;
  price: number;
  stok: number;
}

class Product implements ProductInterface {
  public constructor(
    public nama: string,
    public berat: number,
    public price: number,
    public stok: number
    ) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stok = stok;
  }
}

class Buku extends Product {
  buku: string;

  public constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    buku: string
  ) {
    super(nama, berat, price, stok);
    this.buku = buku;
  }
}

class Pakaian extends Product {
  pakaian: string;

  public constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    pakaian: string
  ) {
    super(nama, berat, price, stok);
    this.pakaian = pakaian;
  }
}

class OnlineShop {
  private products: Product[];
  private cart: { produk: Product; jumlah: number }[];

  constructor() {
    this.products = [];
    this.cart = [];
  }

  tambahProduk(produk: Product): string {
    if (this.products.some((item) => item.nama === produk.nama)) {
      return "produk sudah ada dalam toko";
    } else {
      this.products.push(produk);
      return "berhasil menambahkan produk ke toko";
    }
  }

  updateStock() {
    this.cart.forEach((item) => {
      item.produk.stok -= item.jumlah;
    });
  }

  tambahKeKeranjang(
    produk: Product,
    jumlah: number
  ): string | { stok: string; sisaStok: number } {
    const productIndex = this.products.findIndex(
      (item) => item.nama === produk.nama
    );

    if (productIndex === -1) {
      return "produk tidak tersedia di katalog";
    } else if (this.cart.some((item) => item.produk.nama === produk.nama)) {
      return "produk sudah ada di dalam keranjang";
    } else if (this.products[productIndex].stok < jumlah) {
      return {
        stok: "stok tidak mencukupi",
        sisaStok: produk.stok,
      };
    } else {
      this.cart.push({ produk, jumlah });
      this.products[productIndex].stok -= jumlah;
      return "produk berhasil ditambahkan ke keranjang";
    }
  }

  transaksi(uangUser: number, jarak: number) {
    const totalHarga = this.cart.reduce((total: number, item) => {
      return total + item.produk.price * item.jumlah;
    }, 0);

    const ongkir: number = jarak * 2000;
    const uangYangHarusDibayar: number = totalHarga + ongkir;

    if (uangUser < uangYangHarusDibayar) {
      return "Uangnya kurang brok";
    } else {
      const kembalian: number = uangUser - uangYangHarusDibayar;
      this.cart = [];
      return {
        uangYangHarusDibayar,
        ongkir,
        kembalian,
      };
    }
  }

  showCatalog() {
    return this.products;
  }

  showCart() {
    return this.cart;
  }
}

const buku1 = new Buku("Cihuy", 0.5, 100_000, 10, "Komedi");
const buku2 = new Buku("Cibai", 0.7, 150_000, 5, "Komedi");
const pakaian1 = new Pakaian("Kaos Partai", 0.2, 50_000, 20, "Cotton");
const pakaian2 = new Pakaian("Jeans", 0.8, 120_000, 15, "Denim");

const onlineShop = new OnlineShop();

console.log(onlineShop.tambahProduk(buku1));
onlineShop.tambahProduk(buku2);
onlineShop.tambahProduk(pakaian1);
onlineShop.tambahProduk(pakaian2);

console.log(onlineShop.tambahKeKeranjang(buku1, 1));
console.log(onlineShop.tambahKeKeranjang(buku1, 9));
console.log(onlineShop.tambahKeKeranjang(pakaian2, 1));
console.log(onlineShop.tambahKeKeranjang(pakaian1, 25));
console.log("Cart:", onlineShop.showCart());

console.log(onlineShop.transaksi(2_000_000, 10));

console.log("Catalog:", onlineShop.showCatalog());
console.log("Cart:", onlineShop.showCart());
