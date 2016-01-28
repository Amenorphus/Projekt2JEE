package com.przychodnia.service;

import com.przychodnia.dao.WeterynarzDAO;
import com.przychodnia.domain.Weterynarz;
import com.przychodnia.domain.Zwierze;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class WeterynarzManager implements WeterynarzDAO
{
	@PersistenceContext
    EntityManager em;

    public Weterynarz addWeterynarz(Weterynarz weterynarz)
    {
        em.persist(weterynarz);
        em.flush();

        return weterynarz;
    }

    public void deleteWeterynarz(Weterynarz weterynarz)
    {
        em.remove(em.getReference(Weterynarz.class, weterynarz.getId()));
    }

    public void updateWeterynarz(Weterynarz weterynarz)
    {
        
    	Weterynarz w=(Weterynarz)em.find(Weterynarz.class,weterynarz.getId());
    	w.setImie(weterynarz.getImie());
    	w.setNazwisko(weterynarz.getNazwisko());
    }

    public List<Weterynarz> getAllWeterynarzs()
    {
        return em.createNamedQuery("weterynarz.getAll").getResultList();
    }

    public Weterynarz getWeterynarzByID(Long id)
    {
        return em.find(Weterynarz.class, id);
    }
	

}
