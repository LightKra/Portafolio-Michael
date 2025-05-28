import React from 'react'
import './sectionBanner.css'
import type { SectionBannerProps } from '../../types/types'
import { Button } from '../button/button'

export const SectionBanner: React.FC<SectionBannerProps> = ({ title, link }) => {
    return (
        <section className="section-banner">
            <div className="section-banner-content">
                <h1 className="section-banner-title">{title}</h1>
                <a href={link} target='_blank'>
                    <Button>Repositorio</Button>
                </a>
            </div>
        </section>
    )
}
