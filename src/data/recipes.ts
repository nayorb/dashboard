import { IAppRecipe } from "../types/recipes/recipe.types";
import { RecipeCategory } from "../types/recipes/recipe-category.types";
import { RecipeIngredientType } from "../types/recipes/recipe-ingredient-types.types";
import { RecipeIngredient } from "../types/recipes/recipe-ingredients.types";

const RECIPES: IAppRecipe[] = [
  {
    title: "Kung pao",
    id: "kung_pao",
    categories: [
      RecipeCategory.bezlepkove,
      RecipeCategory.do_30,
      RecipeCategory.bezlaktozove,
      RecipeCategory.medzinarodna_kuchyna,
      RecipeCategory.maso_hydina,
      RecipeCategory.maso,
      RecipeCategory.diety,
    ],
    ingredientCategories: [
      {
        title: "Marináda na mäso",
        ingredients: [
          { type: RecipeIngredientType.g, amount: 500, ingredient: RecipeIngredient.kuracie_maso },
          { type: RecipeIngredientType.PL, amount: 1, ingredient: RecipeIngredient.sojova_omacka },
          { type: RecipeIngredientType.PL, amount: 2, ingredient: RecipeIngredient.voda },
          { type: RecipeIngredientType.KL, amount: 1, ingredient: RecipeIngredient.kukuricny_skrob },
        ],
      },
      {
        title: "Zálievka",
        ingredients: [
          { type: RecipeIngredientType.PL, amount: 1, ingredient: RecipeIngredient.ryzove_vino },
          { type: RecipeIngredientType.KL, amount: 1, ingredient: RecipeIngredient.ryzovy_ocot },
          { type: RecipeIngredientType.PL, amount: 1, ingredient: RecipeIngredient.sojova_omacka },
          { type: RecipeIngredientType.KL, amount: 1, ingredient: RecipeIngredient.kukuricny_skrob },
          { type: RecipeIngredientType.PL, amount: 1, ingredient: RecipeIngredient.cukor },
          { type: RecipeIngredientType.KL, amount: 1, ingredient: RecipeIngredient.olej },
          { type: RecipeIngredientType.KL, amount: 0.25, ingredient: RecipeIngredient.sol },
        ],
      },
      {
        title: "Ostatné",
        ingredients: [
          { type: RecipeIngredientType.KL, amount: 1, ingredient: RecipeIngredient.zazvor },
          { type: RecipeIngredientType.g, amount: 100, ingredient: RecipeIngredient.arasidy },
          { type: RecipeIngredientType.ks, amount: [1, 2], ingredient: RecipeIngredient.chilli_papricka },
          { type: RecipeIngredientType.ml, amount: 300, ingredient: RecipeIngredient.olej },
        ],
      },
    ],
    steps: [
      "Kuracie mäso (vykostené stehná, alebo prsia) nakrájame na maličké kocky. Pripravíme marinádu, premiešame ju s mäsom a necháme asi pol hodiny marinovať. Vo woku rozpálime olej. Marinované mäso v menších dávkach ofritujeme v rozpálenom oleji. Trvá to vždy asi pol minúty, mäso vyberieme z oleja a necháme ho ztiecť z oleja na papierovej utierke. Olej pred ďalším mäsom necháme znovu rozpáliť.",
      "Olej z woku vylejeme a odložíme. Vo woku nám ostane len pár kvapôčok oleja a to stačí na ďalšiu prípravu. Wok znovu rozohrejeme, pridáme chilli papričky a na jemno nastrúhaný zázvor, orestujeme a pridáme ofritované mäso, ktoré ešte asi pol minúty prudko opečieme. Na mäso nalejeme zálievku a premiešame. Na zálievku je dobré použiť čierny ryžový ocot.",
      "Zálievka na mäse zhustne a wok môžeme vypnúť. Do hotového jedla vmiešame pražené nesolené arašidy. Podávame s ryžou.",
    ],
  },
];

export default RECIPES;
