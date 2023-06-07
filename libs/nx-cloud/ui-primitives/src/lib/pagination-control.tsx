import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Button } from './button';

type PaginationControlAction = 'first' | 'previous' | 'next' | 'last';

export interface PaginationControlPage {
  length: number;
  index: number;
  pageSize: number;
}

export const PaginationControl = forwardRef(function PaginationControl(
  {
    length,
    pageSize = 50,
    onPageChange,
  }: {
    length: number;
    pageSize?: number;
    onPageChange: (page: PaginationControlPage) => any;
  },
  ref
) {
  const [page, setPage] = useState({
    length,
    index: 0,
    pageSize,
  });

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  useEffect(() => {
    setPage({
      ...page,
      length,
      pageSize,
    });
  }, [length, pageSize]);

  useImperativeHandle(
    ref,
    () => {
      return {
        goToFirstPage(): void {
          setPage({
            length,
            pageSize,
            index: 0,
          });
        },
      };
    },
    [length, pageSize]
  );

  function changePage(action: PaginationControlAction): void {
    let index;

    switch (action) {
      case 'first':
        index = 0;
        break;

      case 'previous':
        index = page.index > 0 ? page.index - page.pageSize : 0;
        break;

      case 'next':
        index = page.index + page.pageSize;
        break;

      case 'last':
        index = page.length - (page.length % page.pageSize || page.pageSize);
        break;

      default:
        index = page.index;
        break;
    }

    setPage({
      ...page,
      index,
    });
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="mr-4">
        {page.length > 0
          ? `${page.index + 1} - ${Math.min(
              page.index + page.pageSize,
              page.length
            )} of ${page.length}`
          : 'No results'}
      </div>

      <Button
        variant="secondary"
        size="small"
        onClick={(e) => changePage('first')}
        disabled={page.index === 0}
        data-cy="pagination-control-first-page-button"
      >
        <ChevronDoubleLeftIcon className="h-5 w-5" title="First page" />
      </Button>
      <Button
        variant="secondary"
        size="small"
        onClick={() => changePage('previous')}
        disabled={page.index === 0}
        data-cy="pagination-control-previous-page-button"
      >
        <ChevronLeftIcon className="h-5 w-5" title="Previous page" />
      </Button>
      <Button
        variant="secondary"
        size="small"
        onClick={() => changePage('next')}
        disabled={page.index > page.length - page.pageSize}
        data-cy="pagination-control-next-page-button"
      >
        <ChevronRightIcon className="h-5 w-5" title="Next page" />
      </Button>
      <Button
        variant="secondary"
        size="small"
        onClick={() => changePage('last')}
        disabled={page.index > page.length - page.pageSize}
        data-cy="pagination-control-last-page-button"
      >
        <ChevronDoubleRightIcon className="h-5 w-5" title="Last page" />
      </Button>
    </div>
  );
});
