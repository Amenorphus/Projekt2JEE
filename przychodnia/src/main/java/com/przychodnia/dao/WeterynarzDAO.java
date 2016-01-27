package com.przychodnia.dao;

import com.przychodnia.domain.Weterynarz;

import java.util.List;

public interface WeterynarzDAO 
{
	Weterynarz addWeterynarz(Weterynarz weterynarz);
    void deleteWeterynarz(Weterynarz weterynarz);
    Weterynarz updateWeterynarz(Weterynarz weterynarz);
    List<Weterynarz> getAllWeterynarzs();
    Weterynarz getWeterynarzByID(Long id);

}
