import React from 'react'
import style from '@/styles/home.module.scss'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  sort_projects,
  filter_projects,
} from '@/data/store/reducers/projectsReducer'
import { sorts } from '@/data/store/initialState'

const Search = ({ count }) => {
  const dispatch = useDispatch()
  const text_search = useSelector((state) => state.projects.text)
  const text_filter = useSelector((state) => state.projects.select)

  return (
    <div>
      <div id={style.projects_sort}>
        <div>
          <i>
            <FaSearch />
          </i>
          <input
            autoComplete='false'
            type='search'
            list='project-search'
            placeholder='Search'
            value={text_search}
            onChange={(e) => dispatch(sort_projects(e.target.value))}
          />
        </div>
        <select
          onChange={(e) =>
            dispatch(
              filter_projects(e.target[e.target.options.selectedIndex].value)
            )
          }
        >
          <option value=''>all</option>
          {sorts.map((sort) => (
            <option key={sort}>{sort}</option>
          ))}
        </select>
      </div>
      <section className={style.search_report}>
        <h3>
          Results: <b>{count}</b>{' '}
          {text_search && (
            <>
              for <b>&quot;{text_search}&quot;</b>
            </>
          )}{' '}
          {text_filter && (
            <>
              in <b>&quot;{text_filter}&quot;</b>
            </>
          )}
        </h3>
      </section>
      {count === 0 && (
        <section className={style.no_match}>
          <h3>No project matched :(</h3>
        </section>
      )}
    </div>
  )
}

export default Search
