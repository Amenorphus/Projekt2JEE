package com.przychodnia.dao;

import com.przychodnia.domain.Zwierze;

import java.util.List;

public interface ZwierzeDAO 
{
	Zwierze addZwierze(Zwierze zwierze);
    void deleteZwierze(Zwierze zwierze);
    Zwierze updateZwierze(Zwierze zwierze);
    List<Zwierze> getAllZwierzes();
    Zwierze getZwierzeByID(Long id);
}
