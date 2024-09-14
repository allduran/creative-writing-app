import prompts from "../prompts.json";

const fetchDailyPrompt = async () => {
  const today = new Date().toISOString().split("T")[0];

  const todayPrompt = prompts.find(prompt => prompt.date === today);

  if (todayPrompt) {
    return { prompt: todayPrompt.prompt, hint: todayPrompt.hint };
  } else {
    return { prompt: "No prompt found for today. Try again later!", hint: "" };
  }
};

export default fetchDailyPrompt;
