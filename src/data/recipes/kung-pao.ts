import { RecipeCategory } from "../../types/recipes/recipe-category.types";
import { RecipeUnit } from "../../types/recipes/recipe-ingredient-types.types";
import { RecipeIngredient } from "../../types/recipes/recipe-ingredients.types";
import { IAppRecipe } from "../../types/recipes/recipe.types";

const kung_pao: IAppRecipe = {
  title: "Kung pao",
  id: "kung_pao",
  categories: [
    RecipeCategory.bezlepkove,
    RecipeCategory.do_30,
    RecipeCategory.bezlaktozove,
    RecipeCategory.medzinarodna_kuchyna,
    RecipeCategory.maso_hydina,
  ],
  ingredientCategories: [
    {
      title: "Marináda na mäso",
      ingredients: [
        { unit: RecipeUnit.g, amount: 500, ingredient: RecipeIngredient.kuracie_maso },
        { unit: RecipeUnit.PL, amount: 1, ingredient: RecipeIngredient.sojova_omacka },
        { unit: RecipeUnit.PL, amount: 2, ingredient: RecipeIngredient.voda },
        { unit: RecipeUnit.KL, amount: 1, ingredient: RecipeIngredient.kukuricny_skrob },
      ],
    },
    {
      title: "Zálievka",
      ingredients: [
        { unit: RecipeUnit.PL, amount: 1, ingredient: RecipeIngredient.ryzove_vino },
        { unit: RecipeUnit.KL, amount: 1, ingredient: RecipeIngredient.ryzovy_ocot },
        { unit: RecipeUnit.PL, amount: 1, ingredient: RecipeIngredient.sojova_omacka },
        { unit: RecipeUnit.KL, amount: 1, ingredient: RecipeIngredient.kukuricny_skrob },
        { unit: RecipeUnit.PL, amount: 1, ingredient: RecipeIngredient.cukor },
        { unit: RecipeUnit.KL, amount: 1, ingredient: RecipeIngredient.olej },
        { unit: RecipeUnit.KL, amount: 0.25, ingredient: RecipeIngredient.sol },
      ],
    },
    {
      title: "Ostatné",
      ingredients: [
        { unit: RecipeUnit.KL, amount: 1, ingredient: RecipeIngredient.zazvor },
        { unit: RecipeUnit.g, amount: 100, ingredient: RecipeIngredient.arasidy },
        { unit: RecipeUnit.ks, amount: [1, 2], ingredient: RecipeIngredient.chilli_papricka },
        { unit: RecipeUnit.ml, amount: 300, ingredient: RecipeIngredient.olej },
      ],
    },
  ],
  steps: [
    "Kuracie mäso (vykostené stehná, alebo prsia) nakrájame na maličké kocky. Pripravíme marinádu, premiešame ju s mäsom a necháme asi pol hodiny marinovať. Vo woku rozpálime olej. Marinované mäso v menších dávkach ofritujeme v rozpálenom oleji. Trvá to vždy asi pol minúty, mäso vyberieme z oleja a necháme ho ztiecť z oleja na papierovej utierke. Olej pred ďalším mäsom necháme znovu rozpáliť.",
    "Olej z woku vylejeme a odložíme. Vo woku nám ostane len pár kvapôčok oleja a to stačí na ďalšiu prípravu. Wok znovu rozohrejeme, pridáme chilli papričky a na jemno nastrúhaný zázvor, orestujeme a pridáme ofritované mäso, ktoré ešte asi pol minúty prudko opečieme. Na mäso nalejeme zálievku a premiešame. Na zálievku je dobré použiť čierny ryžový ocot.",
    "Zálievka na mäse zhustne a wok môžeme vypnúť. Do hotového jedla vmiešame pražené nesolené arašidy. Podávame s ryžou.",
  ],
};

export default kung_pao;
