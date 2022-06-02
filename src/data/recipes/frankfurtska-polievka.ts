import { IAppRecipe } from "../../types/recipes/recipe.types";
import { RecipeCategory } from "../../types/recipes/recipe-category.types";
import { RecipeUnit } from "../../types/recipes/recipe-ingredient-types.types";
import { RecipeIngredient } from "../../types/recipes/recipe-ingredients.types";

const frankfurtska_polievka: IAppRecipe = {
  title: "Frankfurtská polievka",
  id: "frankfurtska_polievka",
  categories: [
    RecipeCategory.chutovky_a_predjedla,
    RecipeCategory.polievky,
    RecipeCategory.maso_bravcove,
    RecipeCategory.slovenska_kuchyna,
  ],
  ingredientCategories: [
    {
      ingredients: [
        { amount: 300, unit: RecipeUnit.g, ingredient: RecipeIngredient.parky },
        { amount: 600, unit: RecipeUnit.g, ingredient: RecipeIngredient.zemiaky },
        { amount: 150, unit: RecipeUnit.g, ingredient: RecipeIngredient.cibula },
        { amount: 100, unit: RecipeUnit.g, ingredient: RecipeIngredient.tuk },
        { amount: 80, unit: RecipeUnit.g, ingredient: RecipeIngredient.hladka_muka },
        { amount: 200, unit: RecipeUnit.ml, ingredient: RecipeIngredient.mlieko },
        { amount: 1, unit: RecipeUnit.PL, ingredient: RecipeIngredient.paprika_mleta_sladka },
        { amount: 2000, unit: RecipeUnit.ml, ingredient: RecipeIngredient.vyvar },
        { ingredient: RecipeIngredient.korenie_cierne_mlete },
        { ingredient: RecipeIngredient.sol },
      ],
    },
  ],
  steps: [
    "Cibuľu nakrájame na jemno a osmažíme pár minút na masti na strednom plameni.",
    "Do osmaženej cibule pridáme hladkú múku a urobíme svetlú zásmažku, tak, že múku necháme na menšom plameni chvíľu porestovať. Nakoniec pridáme mletú sladkú papriku.",
    "Zalejeme pripraveným vývarom (asi 2 litre). Metličkou prešľaháme, pomaly privedieme k varu a povaríme aspoň 20 minút. Ochutnáme a pridáme ak treba soľ a čierne mleté korenie.",
    "Potom pridáme na kocky nakrájané očistené zemiaky, ktoré v polievke povaríme asi 20 minút.",
    "Ďalej pridáme do polievky na kolieska nakrájané frankfurtské párky a ešte asi 10 minút povaríme.",
    "Polievku osolíme, ochutíme korením podľa chuti. Celkom nakoniec pridáme do polievky na zjemnenie trošku mlieka a ešte krátko prevaríme. Dobrú chuť!",
  ],
};

export default frankfurtska_polievka;
