import { API_URL } from "@/app/constants";
import { IResults } from "../types";

export async function getCategoryLists() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export const getBooks = async (id: string): Promise<{ results: IResults }> => {
  try {
    const response = await fetch(`${API_URL}/list?name=${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch books for list: ${id}`);
    }

    const data = await response.json();
    return data; // API 응답 데이터를 반환
  } catch (error) {
    console.error("Error fetching books:", error); // 오류 로그 출력
    throw error; // 호출한 곳에 오류를 다시 던짐
  }
};
