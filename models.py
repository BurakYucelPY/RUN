from pydantic import BaseModel

class OyunIstegi(BaseModel):
    scenario_id: str
    oyuncu_adi: str
    esya: str
    korku: str