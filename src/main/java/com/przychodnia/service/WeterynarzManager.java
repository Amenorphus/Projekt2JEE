package com.przychodnia.service;

import com.przychodnia.dao.WeterynarzDAO;
import com.przychodnia.domain.Weterynarz;

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

    public Weterynarz updateWeterynarz(Weterynarz weterynarz)
    {
        return (Weterynarz)em.merge(weterynarz);
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
