import axios from "axios"

export default async function handler(req, res) {
  const stopId = req.query.stopId || "06668"

  try {
    const response = await axios.post(
      "https://businfo.daegu.go.kr/busStopArrive.do",
      new URLSearchParams({ stop_id: stopId }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: "데이터 수신 실패", detail: error.message })
  }
}
