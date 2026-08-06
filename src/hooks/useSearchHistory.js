import { useCallback, useEffect, useState } from "react";
import { getSearchHistoryRequest } from "../api/weatherApi";

export function useSearchHistory(refreshKey) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getSearchHistoryRequest();
      setHistory(data);
    } catch {
      // non-critical, fail quietly
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load, refreshKey]);

  return { history, loading, reload: load };
}