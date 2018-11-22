<?php

namespace BackBundle\Entity;
use Symfony\Component\HttpFoundation\File\File;
/**
 * Image
 */
class Image
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var file
     */
    private $image;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set image
     *
     * @param \file $image
     *
     * @return Image
     */
    public function setImage(\file $image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return \file
     */
    public function getImage()
    {
        return $this->image;
    }
    /**
     * @var string
     */
    private $lifecycleCallbacks;


    /**
     * Set lifecycleCallbacks
     *
     * @param string $lifecycleCallbacks
     *
     * @return Image
     */
    public function setLifecycleCallbacks($lifecycleCallbacks)
    {
        $this->lifecycleCallbacks = $lifecycleCallbacks;

        return $this;
    }

    /**
     * Get lifecycleCallbacks
     *
     * @return string
     */
    public function getLifecycleCallbacks()
    {
        return $this->lifecycleCallbacks;
    }
    /**
     * @var string
     */
    private $name;


    /**
     * Set name
     *
     * @param string $name
     *
     * @return Image
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * @var \BackBundle\Entity\Tickets
     */
    private $ticket;


    /**
     * Set ticket
     *
     * @param \BackBundle\Entity\Tickets $ticket
     *
     * @return Image
     */
    public function setTicket(\BackBundle\Entity\Tickets $ticket = null)
    {
        $this->ticket = $ticket;

        return $this;
    }

    /**
     * Get ticket
     *
     * @return \BackBundle\Entity\Tickets
     */
    public function getTicket()
    {
        return $this->ticket;
    }
}
