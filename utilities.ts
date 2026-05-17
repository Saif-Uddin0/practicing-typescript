// utilities type

type Product={
    id: number;
    name: string;
    price: string;
    stocl: number;
    color?: string;
}

type ProductSummary = Pick<Product , "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product , "stocl" | "color">


type ProductWithColor = Required<Product>

type OptionalProduct = Partial<Product>
