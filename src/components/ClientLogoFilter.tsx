"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";
import {
  CLIENT_CATEGORIES,
  CLIENTS_BY_CATEGORY,
  type ClientCategory,
} from "@/data/clients";
import styles from "@/styles/home.module.css";

export default function ClientLogoFilter() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("all");
  const visibleClients = CLIENTS_BY_CATEGORY[activeCategory];

  return (
    <>
      <div className={styles.clientFilter} aria-label="Client categories">
        {CLIENT_CATEGORIES.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              className={`${styles.clientFilterButton} ${isActive ? styles.clientFilterButtonActive : ""}`}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              <span className={styles.clientFilterIndicator} aria-hidden="true">
                {category === "all" ? "→" : ""}
              </span>
              <span>{category}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.clientLogoGrid} aria-live="polite">
        {visibleClients.map((client) => (
          <div
            className={styles.clientLogoItem}
            key={client.id}
            data-logo-id={client.id}
            style={
              {
                "--client-logo-width": `${Math.min(client.displaySize[0], 166)}px`,
                "--client-logo-height": `${Math.min(client.displaySize[1], 166)}px`,
              } as CSSProperties
            }
          >
            {client.href ? (
              <Link
                className={styles.clientLogoLink}
                href={client.href}
                aria-label={`View ${client.id === 1 ? "Johnson" : "Angelalign"} project`}
              >
                <img
                  className={styles.clientLogoImage}
                  src={client.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            ) : (
              <img
                className={styles.clientLogoImage}
                src={client.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
